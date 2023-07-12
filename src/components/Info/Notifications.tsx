import { showNotificationlist } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  NotificationItemStyles,
  NotificationListStyle,
} from "@/styles/HeroStyles/Info";
import { FunctionComponent } from "react";
import { Dollar, TrashNotification } from "../Icons/Icons";

export interface INotification {
  id: string;
  type: string;
  message: string;
}

export const NotificationList: FunctionComponent = () => {
  const { notificationList } = useAppSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  const handleMouseLeave = () => {
    dispatch(showNotificationlist(false));
  };
  const handleMouseOver = () => {
    dispatch(showNotificationlist(true));
  };
  return (
    <NotificationListStyle
      length={notificationList?.length ? notificationList.length : 0}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      {notificationList &&
      notificationList !== null &&
      notificationList.length > 0 ? (
        notificationList.map((ele, index) => (
          <Notificationitem
            key={index}
            id={ele.id}
            type={ele.type}
            message={ele.message}
            isEndOfList={notificationList.length === index + 1}
          />
        ))
      ) : (
        <div className="empty">
          <p>You have no notifications</p>
        </div>
      )}
    </NotificationListStyle>
  );
};

interface INotificationFC extends INotification {
  isEndOfList: boolean;
}
export const Notificationitem: FunctionComponent<INotificationFC> = ({
  id,
  type,
  message,
  isEndOfList,
}) => {
  return (
    <NotificationItemStyles>
      <div className="list">
        <div className="svg">{type == "payment" && <Dollar />}</div>
        <p>{message}</p>
        <div className="trash">
          <TrashNotification id={id} />
        </div>
      </div>
      {!isEndOfList && <hr />}
    </NotificationItemStyles>
  );
};
