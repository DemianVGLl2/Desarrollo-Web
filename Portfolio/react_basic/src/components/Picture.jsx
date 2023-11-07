function Picture() {
    var num = Math.floor(Math.random() * 100);
    var image = "https://picsum.photos/400";
    return (
      <div>
        <img alt='Random' src={image}/>
        <p>
          This is my first React page <br/>
          My number is {num}
        </p>
      </div>
    );
  }

export default Picture;