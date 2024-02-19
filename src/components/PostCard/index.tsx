
import { NavLink } from "react-router-dom";
import { Header, PostCardContainer } from "./styles";
import { formatDistanceToNow  } from "date-fns";

interface CardProps {
  title: string,
  body: string,
  createdAt: string,
  issueId:number
}

export function PostCard({ title, body, createdAt, issueId} :CardProps) {
    const daysDifference = formatDistanceToNow(createdAt) 
    const handlePostClick = () => {}

    return(
      <PostCardContainer onClick={handlePostClick}>
        <NavLink to={`/issue/${issueId}`} title="issue">

        
        <Header>
          <span>{title}</span>
          <span>{daysDifference}</span>
        </Header>
        <span>{body}</span>
        </NavLink>
      </PostCardContainer>
    )
}