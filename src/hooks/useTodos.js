import { useCallback, useEffect, useRef, useState } from "react";
import { fetchTodos } from "../api/fakeServer";
import { createId } from "../utils/createId";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "error" | "success"
  const requestRef = useRef(0); // ignores responses from outdated requests

  const load = useCallback(async () => {
    const requestId = ++requestRef.current;
    setStatus("loading");
    try {
      const data = await fetchTodos();
      if (requestId !== requestRef.current) return;
      setTodos(data);
      setStatus("success");
    } catch {
      if (requestId === requestRef.current) setStatus("error");
    }
  }, []);

  useEffect(() => {
    load();
    return () => {
      requestRef.current++;
    };
  }, [load]);

  // Returns true when the todo was accepted, false when the title is invalid.
  const addTodo = useCallback((rawTitle) => {
    if (typeof rawTitle !== "string") return false;
    const title = rawTitle.trim();
    if (!title) return false;
    setTodos((prev) => [...prev, { id: createId(), title, done: false }]);
    return true;
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return { todos, status, reload: load, addTodo, toggleTodo, deleteTodo };
}
