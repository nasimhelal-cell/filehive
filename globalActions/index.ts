import { setCookie } from "cookies-next";
export const actionGridListView = (formData: any) => {
  let view = formData.get("view");
  setCookie("gridList", view);
  return view;
};

export const actionFileFolderView = (formData: any) => {
  let view = formData.get("view");
  setCookie("fileFolder", view);
  return view;
};
