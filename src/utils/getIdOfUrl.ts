export const getIdOfUrl = (url: string): string => url.split("/").pop() || "";
