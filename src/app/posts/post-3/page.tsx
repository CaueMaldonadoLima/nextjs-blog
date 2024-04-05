import DefaultPostComponent from "@/components/posts/DefaultPostComponent";

export default function Post03() {
	return (
		<DefaultPostComponent 
			mainTitle={"Post 3"}
			mainImage={"/astronautImage.png"} 
			recommendedPost1={{
				postImage: "/keyboardImage.png",
				postName: "Post 2",
				index: 1
			}} 
			recommendedPost2={{
				postImage: "/vrManImage.png",
				postName: "Post 1",
				index: 0,
			}}
		/>		
	)
}
