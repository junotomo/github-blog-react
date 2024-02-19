import { useContext } from "react";
import { PostContext } from "../../Contexts/PostsContext";
import { PostCard } from "../../components/PostCard";
import { SearchForm } from "../../components/SearchForm";
import { TitleCard } from "../../components/TitleCard";
import { HomeContainer, PostListContainer } from "./styles";



export function Home() {
    const {posts} = useContext(PostContext)
    return (
        <HomeContainer>
            <TitleCard />
            <SearchForm/>
            <PostListContainer>
                {posts.map(post => {
                    return(
                        <PostCard
                            key={post.id}
                            title={post.title}
                            createdAt={post.created_at}
                            body={post.body}
                            issueId={post.id}
                        />
                    )
                })}
                
          
            </PostListContainer>

       </HomeContainer>
    )
     

}

