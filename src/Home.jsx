    import React, { useState } from "react";

    function Home({ todos, setTodos ,count,setCount,completeCount,setCompleteCount}) {
    let day = getDay();
    const [todo, setTodo] = useState("");
    const [showLimitMessage, setLimitMessge] = useState(false);

    const removeTodo = (id) => {
        const removedTodo = todos.find(todo => todo.id === id);

        setTodos(todos.filter((todo) => todo.id !== id));
        setCount(count-1)
       
        if (removedTodo && removedTodo.status) {
            setCompleteCount(prevCount => prevCount - 1);
        }
     

    };

   
    return (
        <div className="homePage">
        <div className="subHeading">
            <h3>Home  <i class='fas fa-chevron-right' style={{fontSize:'15px'}}></i></h3>
        </div>
        <div className="showCompletion">
            <div className="todoDone">
                <h1>Todo Done</h1>
                <p>Keep it up</p>
            </div>
            <div className="completion">
            <h1 style={{color:'black',fontSize:'35px'}}> {completeCount}/{count}</h1>
            </div>
          
            </div>
        <div className="todoList">
            <h2 style={{ color: "#0a0a0a", marginLeft: "220px", fontWeight: '900' }}>List</h2>
            <div className="todos">
            {todos.map((obj) => {
                return (
                <div className="todo1">
                    <div className="todo">
                    <div className="left">
                        <input
                        style={{}}
                        checked={obj.status}
                        type="checkbox"
                        name=""
                        id={`_checkbox-${obj.id}`}
                        onChange={(e) => {
                            const isChecked = e.target.checked  
                            setTodos(
                                todos.map((todoItem) =>
                                    todoItem.id === obj.id
                                        ? { ...todoItem, status: e.target.checked }
                                        : todoItem
                                )
                            );
                            if (isChecked) {
                                setCompleteCount((prevCount) => prevCount + 1);
                            } else {
                                setCompleteCount((prevCount) => prevCount - 1);
                            }
                        }}
                        className="custom-checkbox"
                        />
                        <label
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        htmlFor={`_checkbox-${obj.id}`}
                        className="custom-checkbox-label"
                        >
                      
                        </label>

                        <p>{obj.text} </p>
                    </div>
                    <div className="right">
                        <div>
                        <p style={{ fontSize: "10px", color: "grey" }}>
                            {formatTime(obj.id)}
                        </p>
                        <p style={{ fontSize: "10px", color: "grey" }}>
                            {" "}
                            {formatDate(obj.id)}
                        </p>
                        </div>
                    </div>
                    </div>
                    <i
                    className="fas fa-trash removeBtn"
                    onClick={() => removeTodo(obj.id)}
                    ></i>
                </div>
                );
            })}
            </div>
        </div>
        <div className="bottomInput">
            <div className="input1">
            <input
                className="inputbox"
                type="text"
                value={todo}
                onChange={(e) => {
                if (todo.length < 20) {
                    setLimitMessge(false);
                    setTodo(e.target.value);
                } else {
                    setLimitMessge(true);
                }
                }}
                placeholder=" Add item..."
            />
            <div
                className="addbtn"
                onClick={(e) => {
                console.log(todo.length);
                if (todo.length > 0) {
                    setTodos([
                    ...todos,
                    { id: Date.now(), text: todo, status: false },
                    ]);
                    setTodo("");
                    setCount(count+1)
                }
                }}
            >
                {" "}
                <i className="fas fa-plus addIcon" style={{color:'black'}}></i>
            </div>
            {showLimitMessage && (
                <p className="errorMsg"
                style={{
                    color: "red",
                    marginTop: "10px",
                    marginLeft: "10px",
                    fontSize: "12px",
                }}
                >
                Word limit reached!
                </p>
            )}
            </div>
        </div>
        </div>
    );
    }
    export {};
    export default Home;

    function getDay() {
    const currentDate = new Date();

    const dayOfWeekNumber = currentDate.getDay();

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

    return dayOfWeekName;
    }

    function formatDate(d) {
    // Array of month names
    const date = new Date(d);

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;

    return formattedDate;
    }

    function formatTime(timestamp) {
    const date = new Date(timestamp);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedTime = `${hours}:${minutes} ${amOrPm}`;

    return formattedTime;
    }
