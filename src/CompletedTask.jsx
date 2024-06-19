import React from "react";

function CompletedTask({ todos,completeCount }) {
  return (
    <div className="taskPage">
      <div className="subHeading">
        <h3>Completed Tasks <i class='fas fa-chevron-right' style={{fontSize:'15px'}}></i>
</h3>
      </div>
      <div className="completeList">
        <div className="taskTitle"><h2>You Completed {completeCount} tasks!</h2></div>
        <div>
          {todos.map((obj) => {
            if (obj.status) {
              return <div className="completeBox"> <p>{obj.text}</p></div>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;
