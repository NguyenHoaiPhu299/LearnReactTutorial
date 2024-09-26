function Avatar(){
    return(
        <div className="avatar">
            <img src="https://pixlr.com/images/generator/photo-generator.webp" alt="" style={{width: '300px'}}/>
            <img src="/images/image.jpg" alt="" style={{width: '300px'}}/>
            {/* <img src="%PUBLIC_URL/images/images" alt="" style={{width: '300px'}}/> */}
            <img src={process.env.PUBLIC_URL + "/images/image.jpg"} alt="" style={{width: '300px'}}/>
        </div>
    )
};

export default Avatar;