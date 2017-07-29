import React from 'react';

class PopularPost extends React.Component {
    constructor(){
        super();
        this.state = {
            posts:[ 
                {
                    "desc": "70% investors are “Asset Poor” - What about you?",
                    "question": "What people consider themself?",
                    "imgUrl": "/images/Blog_img.jpg"
                }
            ]
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:9000/blogs/getPosts`)
          .then(res => {
            console.log(res);
            this.setState({ posts:res.data });
          });
      }
    
    render(){
        return(
            <div className="popular-post">
                <div className="post-heading">Popular Post</div>
                {this.state.posts.map((data, i) => {
                    return <div key={i} className="post-content">
                        <div className="post-image">
                            <img src={data.imgUrl}></img>
                        </div>
                        <div className="post-ques">{data.question}</div>
                        <div className="post-desc">{data.desc}</div>

                    </div>
                    })}
            </div>
            
        );
    }
    
}

export default PopularPost;