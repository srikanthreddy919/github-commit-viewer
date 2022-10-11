import React from "react";
import ReactTimeAgo from "react-time-ago";

const ListItem = ({ commit }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <p className="font-medium">{commit?.commit.message}</p>
        <p>
          {
            <ReactTimeAgo
              date={new Date(commit?.commit?.committer?.date)}
              locale="en-US"
            />
          }{" "}
          <span className="font-medium">
            by {commit?.commit?.committer.name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
