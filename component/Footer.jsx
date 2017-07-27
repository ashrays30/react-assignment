import React from 'react';
import Social from './SocialIcon.jsx';
import FooterForm from './FooterForm.jsx';

class Footer extends React.Component {
    
    constructor(){
        super();
        this.state = {
            socialIcon:[
                {
                    imgUrl:"/images/facebook_Blk_icon.png",
                    url:"#",
                    name:"facebook"
                },
                {
                    imgUrl:"/images/Twitter_Blk_icon.png",
                    url:"#",
                    name:"twitter"
                },
                {
                    imgUrl:"/images/Linkedin_Blk_icon.png",
                    url:"#",
                    name:"linkedin"
                },
                {
                    imgUrl:"/images/Youtube_Blk_icon.png",
                    url:"#",
                    name:"youtube"
                }
            ],
            quickLinks:[
                {
                    title:"Existing Member? Login",
                    url:"#"
                },
                {
                    title:"Blogs",
                    url:"#"
                },
                {
                    title:"Webinars",
                    url:"#"
                },
                {
                    title:"Videos",
                    url:"#"
                },
                {
                    title:"eBooks",
                    url:"#"
                },
                {
                    title:"Customer Service",
                    url:"#"
                }
            ]
        }
    }
    
    render(){
        return(
            <div>
            <div className="footer">
                <hr></hr>
                <div className="container footer-spacing">
                    <div className="footer-address">
                        <img src="/images/Blog_map.jpg" />
                        <div className="footer-social">
                            <span>FOLLOW US</span>
                            <div className="socialContainer">
                                {this.state.socialIcon.map((icons, i) => {return <a href={icons.url} key={i}><Social imgUrl={icons.imgUrl} key={i}></Social></a>})}
                            </div>
                            
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title">
                            Quick Links
                        </div>
                        <div className="link-list">
                            {this.state.quickLinks.map((links, i) => {return <li key={i}><a href={links.url} key={i}>{links.title}</a></li>})}
                        </div>
                    </div>
                    <FooterForm/>
                </div>
                <hr></hr>
                <div className="footer-copyrights">2017 &copy;  All Right Reserved</div>
            </div>
            
            </div>
        );
    }
}

export default Footer;