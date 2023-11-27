import React, {useState} from "react";

function Card(props) {

    const [mouseOver, setMouseOver] = useState(true);
    const [background, setBackground] = useState("white");
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    //const [comments, setComments] = useState(props.movie.comments);

    function isMouseOver() {
        setMouseOver(!mouseOver);

        if (mouseOver) {
            changeColor();
        }
        else setBackground("white");
    }

    function changeColor() {
        if (props.movie.best_character.affiliation === "Jedi" ||
        props.movie.best_character.affiliation === "Rebellion") setBackground("lightblue");
        else if (props.movie.best_character.affiliation === "Sith" ||
        props.movie.best_character.affiliation === "Empire") setBackground("darkred");
    }
    
    function isLikeClicked() {
        setLikeClicked(!likeClicked);
        props.movie.like = likeClicked;
        if (props.movie.dislike) isDislikeClicked();

    }

    function isDislikeClicked() {
        setDislikeClicked(!dislikeClicked);
        props.movie.dislike = dislikeClicked;
        if (props.movie.like) isLikeClicked();
    }

    function changeName(event) {
        setName(event.target.value);
    }

    function changeComment(event) {
        setComment(event.target.value);
    }

    function submitComment() {
        if (name.trim() !== "" && comment.trim() !== "") {
          var newUser = name;
          var newComment = comment;
    
          props.movie.comments.user.push(newUser);
          props.movie.comments.comment.push(newComment);

          setName("");
          setComment("");
        }
    }

    console.log(props.movie.comments);

    return(
        <div id="Cards" className="col-6 col-md-4">
            <div className="card" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                <img id="Poster" src={props.movie.poster} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Episode {props.movie.episode}: {props.movie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.movie.year}</h6>
                    <p>
                        <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> More...</button>
                        {!props.movie.like ? <i class="fa-regular fa-thumbs-up fa-xl" onClick={isLikeClicked}></i> : <i class="fa-solid fa-thumbs-up fa-xl" onClick={isLikeClicked}></i>}
                        {!props.movie.dislike ? <i class="fa-regular fa-thumbs-down fa-xl" onClick={isDislikeClicked}></i> : <i class="fa-solid fa-thumbs-down fa-xl" onClick={isDislikeClicked}></i>}
                    </p>
                    <div className="collapse" id="collapseExample">
                    <div id="best_character" className="card card-body" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                        <div className="row" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                            <div className="col-lg-12 mb-4 mb-sm-5" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                <div className="card card-style1 border-0" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                    <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                        <div className="row align-items-left" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                            <div className="col-lg-6 mb-4 mb-lg-0" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                                <img id="Character" src={props.movie.best_character.image} alt="..."/>
                                            </div>
                                            <div className="col-lg-6 px-xl-10" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                                <div className="d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                                    <h4 className="h2 mb-0">{props.movie.best_character.name}</h4>
                                                    <span className="text-primary">{props.movie.best_character.affiliation}</span>
                                                </div>
                                                <div className="d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded" onMouseEnter={isMouseOver} onMouseLeave={isMouseOver} style={{backgroundColor: background}}>
                                                    <p id="bio">{props.movie.best_character.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-4 mb-sm-5">
                            <div>
                                <span className="section-title text-primary mb-3 mb-sm-4">Comments</span><br/>
                                <input type="text" placeholder="Name" onChange={changeName} value={name}/><br/>
                                <input type="text" placeholder="Comment" onChange={changeComment} value={comment}/><br/>
                                <button onClick={submitComment}>Comment</button><br/><br/>
                                {props.movie.comments.user.map((user, index) => (
                                    <div key={index}>
                                        <h6 className="mb-0">{user}</h6>
                                        <p>{props.movie.comments.comment[index]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Card;