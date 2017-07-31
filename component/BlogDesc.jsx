import React from 'react';

class BlogDesc extends React.Component {
    
    constructor(){
        super();
        this.state = {
            blogData:
                {
                    "title": "",
                    "postedBy": "",
                    "dateTime": "",
                    "imgUrl": "",
                    "desc": "",
                    "comments": []
                }
        }
    }
    
    componentDidMount() {
        axios.post(`http://localhost:9000/blogs/getBlogsById`,{"blogId":this.props.match.params.id})
          .then(res => {
            console.log(res);
            this.setState({ blogData:res.data });
          });
      }
    
    render(){
        var data = this.state.blogData;
        return(
            <div className="main-content">
            <div className="blog-content">
                    <div className="blog-title">{data.title}</div>
                    <div className="sub-details">
                        <p className="details">POSTED BY <span>{data.postedBy}</span> ON <span>{data.dateTime}</span><span className="comment"><a href="#">COMMENTS({data.comments.length})</a></span></p>
                        
                    </div>
                    <div className="blog-image">
                        <img src={data.imgUrl}></img>
                    </div>
                    <div className="blog-desc">{data.desc}</div>
                     
                </div>
            </div>
        );
    }
}

export default BlogDesc;