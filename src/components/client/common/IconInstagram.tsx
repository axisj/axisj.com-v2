import Icons, { IconsProps } from "@/components/client/common/@Icon";
import * as React from "react";

export function IconInstagram({ size, onClick }: IconsProps) {
  return (
    <Icons size={size} onClick={onClick}>
      <svg viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.48242 13.4C6.48242 9.57965 9.5794 6.48267 13.3997 6.48267C17.22 6.48267 20.317 9.57965 20.317 13.4C20.317 17.2203 17.22 20.3173 13.3997 20.3173C9.5794 20.3173 6.48242 17.2203 6.48242 13.4ZM13.3997 9.31727C11.1449 9.31727 9.31702 11.1452 9.31702 13.4C9.31702 15.6548 11.1449 17.4827 13.3997 17.4827C15.6545 17.4827 17.4824 15.6548 17.4824 13.4C17.4824 11.1452 15.6545 9.31727 13.3997 9.31727Z'
          fill='white'
        />
        <path
          d='M21.7996 6.50006C21.7996 7.32849 21.128 8.00006 20.2996 8.00006C19.4712 8.00006 18.7996 7.32849 18.7996 6.50006C18.7996 5.67164 19.4712 5.00006 20.2996 5.00006C21.128 5.00006 21.7996 5.67164 21.7996 6.50006Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-0.0175781 7.09997C-0.0175781 3.21721 3.21697 -0.017334 7.09972 -0.017334H19.6997C23.5825 -0.017334 26.817 3.21721 26.817 7.09997V19.7C26.817 23.6827 23.6825 26.8173 19.6997 26.8173H7.09972C3.21697 26.8173 -0.0175781 23.5827 -0.0175781 19.7V7.09997ZM7.09972 2.81727C4.78248 2.81727 2.81702 4.78272 2.81702 7.09997V19.7C2.81702 22.0172 4.78247 23.9827 7.09972 23.9827H19.6997C22.117 23.9827 23.9824 22.1172 23.9824 19.7V7.09997C23.9824 4.78272 22.017 2.81727 19.6997 2.81727H7.09972Z'
          fill='white'
        />
      </svg>
    </Icons>
  );
}
