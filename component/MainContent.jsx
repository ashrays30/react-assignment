import React from 'react';
import axios from 'axios';

class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            blogData:[ 
                {
                    "title": "Customer can refuse to pay \"Service Charge\" at Resturant-Govt",
                    "postedBy": "MOHIT CAUHAN",
                    "dateTime": "DEC 12,2016 10:32AM",
                    "imgUrl": "/images/Blog_pic.jpg",
                    "desc": "Govt has clarified that the “service charge” in optional and customers can refuse to pay that if they feel like. From some years, most of the restaurants and hotels have started charging “Service Charge” along with the other taxes in their bills and we customers due to lack of understanding feel obligated to pay it. However the govt has issued a notification today which clearly mentions that if customer is…",
                    "comments": []
                }
            ]
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:9000/blogs/getBlogs`)
          .then(res => {
            console.log(res);
            this.setState({ blogData:res.data });
          });
      }

    render(){
        return(
            <div className="main-content">
                
                {this.state.blogData.map((data, i) => {
                 return <div key={i} className="blog-content">
                    <div className="blog-title">{data.title}</div>
                    <div className="sub-details">
                        <p className="details">POSTED BY <span>{data.postedBy}</span> ON <span>{data.dateTime}</span><span className="comment"><a href="#">COMMENTS({data.comments.length})</a></span></p>
                        
                    </div>
                    <div className="blog-image">
                        <img src={data.imgUrl}></img>
                    </div>
                    <div className="blog-desc">{data.desc}</div>
                    <div className="read-more"><a href="">Read More</a></div>
                </div>
                })}
                
            </div>
        );
    }
    
}

export default MainContent;