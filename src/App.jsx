import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import StatusMessage from "./components/StatusMessage";
import { useTodos } from "./hooks/useTodos";
import { translations, LANGUAGES } from "./i18n/translations";
import { FILTERS } from "./utils/filters";

export default function App() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("all");
  const { todos, status, reload, addTodo, toggleTodo, deleteTodo } = useTodos();

  const t = translations[lang];

  // Language and direction are applied to the whole document.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGES[lang].dir;
    document.title = t.title;
  }, [lang, t.title]);

  // Derived from the single source of truth, so the counter can never drift.
  const visibleTodos = useMemo(() => todos.filter(FILTERS[filter]), [todos, filter]);
  const itemsLeft = useMemo(() => todos.filter(FILTERS.active).length, [todos]);

  const ready = status === "success";

  return (
    <div className="app">
      <Header t={t} lang={lang} onLanguageChange={setLang} />
      <main>
        <TodoForm t={t} onAdd={addTodo} disabled={!ready} />
        <section className="todos" aria-labelledby="todo-title" aria-busy={status === "loading"}>
          {ready ? (
            <>
              <FilterBar t={t} current={filter} onChange={setFilter} />
              <TodoList t={t} todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
              <TodoFooter t={t} count={itemsLeft} />
            </>
          ) : (
            <StatusMessage t={t} status={status} onRetry={reload} />
          )}
        </section>
      </main>
    </div>
  );
}