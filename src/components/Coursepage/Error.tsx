import { DetailH3Styles } from "@/styles/CoursepageStyles/CourseDetail";
import { ErrorCompStyles } from "@/styles/HomepageStyles/Error";
import { FunctionComponent } from "react";

interface IError {
  errormsg: string;
}
export const ErrorMsg: FunctionComponent<IError> = ({ errormsg }) => {
  return (
    <ErrorCompStyles>
      <DetailH3Styles>{errormsg}</DetailH3Styles>
    </ErrorCompStyles>
  );
};
