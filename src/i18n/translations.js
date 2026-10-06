const arabicItemsLeft = (n) => {
  if (n === 0) return "لا توجد عناصر متبقية";
  if (n === 1) return "عنصر واحد متبقٍ";
  if (n === 2) return "عنصران متبقيان";
  if (n <= 10) return `${n} عناصر متبقية`;
  return `${n} عنصرًا متبقيًا`;
};

export const translations = {
  en: {
    title: "Todo list",
    placeholder: "What needs to be done?",
    add: "Add",
    all: "All",
    active: "Active",
    done: "Done",
    itemsLeft: (n) => `${n} ${n === 1 ? "item" : "items"} left`,
    loading: "Loading your todos…",
    error: "Could not load your todos. The server failed.",
    retry: "Retry",
    emptyTitle: "Enter a title before adding.",
    empty: "Nothing here yet.",
    remove: "Delete",
    language: "Language",
    filters: "Filter todos",
    newTodo: "New todo",
  },
  ar: {
    title: "قائمة المهام",
    placeholder: "ما الذي يجب إنجازه؟",
    add: "إضافة",
    all: "الكل",
    active: "النشطة",
    done: "المنجزة",
    itemsLeft: arabicItemsLeft,
    loading: "جارٍ تحميل المهام…",
    error: "تعذّر تحميل المهام. فشل الخادم.",
    retry: "إعادة المحاولة",
    emptyTitle: "اكتب عنوانًا قبل الإضافة.",
    empty: "لا توجد مهام هنا بعد.",
    remove: "حذف",
    language: "اللغة",
    filters: "تصفية المهام",
    newTodo: "مهمة جديدة",
  },
};

export const LANGUAGES = { en: { label: "EN", dir: "ltr" }, ar: { label: "AR", dir: "rtl" } };