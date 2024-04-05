import DefaultPostComponent from "@/components/posts/DefaultPostComponent";

export default function Post02() {
	return (
		<DefaultPostComponent 
			mainTitle={"Post 1"}
			mainImage={"/vrManImage.png"} 
            recommendedPost1={{
				postImage: "/astronautImage.png",
				postName: "Post 3",
                index: 2
			}} 
            recommendedPost2={{
				postImage: "/keyboardImage.png",
				postName: "Post 2",
                index: 1
			}}
		/>		
	)
}
