import "./avatar.scss";

import React, { FC } from "react";

import avatar from "./media/user.svg";

interface Props {
	height: number;
	width: number;
	url?: string;
}

const Avatar: FC<Props> = ({ url = avatar, height, width }) => {
	return (
		<div className="avatar">
			<img src={url} alt="avatar" width={width} height={height} />
			<span className="notification-dot"></span>
		</div>
	);
};
export default Avatar;
