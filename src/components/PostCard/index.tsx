
import { NavLink } from "react-router-dom";
import { Header, PostCardContainer } from "./styles";
import { formatDistanceToNow  } from "date-fns";

interface CardProps {
  title: string,
  body: string,
  createdAt: string,
  issueNumber:number
}

export function PostCard({ title, body, createdAt, issueNumber} :CardProps) {
    const daysDifference = formatDistanceToNow(createdAt) 
    const handlePostClick = () => {}

    return(
      <PostCardContainer onClick={handlePostClick}>
        <NavLink to={`/issue/${issueNumber}`} title="issue">

        
        <Header>
          <span>{title}</span>
          <span>{daysDifference}</span>
        </Header>
        <span>{body}</span>
        </NavLink>
      </PostCardContainer>
    )
}