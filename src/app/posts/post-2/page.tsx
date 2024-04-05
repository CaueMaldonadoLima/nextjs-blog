import DefaultPostComponent from "@/components/posts/DefaultPostComponent";

export default function Post02() {
	return (
		<DefaultPostComponent 
			mainTitle={"Post 2"}
			mainImage={"/keyboardImage.png"} 
            recommendedPost1={{
				postImage: "/astronautImage.png",
				postName: "Post 3",
                index: 2
			}} 
            recommendedPost2={{
				postImage: "/vrManImage.png",
				postName: "Post 1",
                index: 0,
			}}
		/>		
	)
}
