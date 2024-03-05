
import { CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { HeaderIcons, IssueHeader, IssuePageContainer, MarkDownContainer, PageLinks } from "./style";
import Markdown from 'react-markdown'
import { NavLink, useParams } from "react-router-dom";
import goto from '../../assets/goto.svg'
import { api } from "../../lib/axios";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

interface IssuePost {
    title: string,
    comments: number,
    createdAt: string,
    body: string,
    login: string,
    html_url: string
}


export function IssuePage() {
    const [issue, setIssue] = useState<IssuePost>(
        {
            title: '',
            comments: 0,
            createdAt: '',
            body: '',
            login: '',
            html_url: ''
        }
    )

    const {issueNumber} = useParams()
    console.log(issueNumber)
    async function getIssue() {
        const issueURL = `${import.meta.env.VITE_BASE_URL}repos/${import.meta.env.VITE_USERNAME}/${import.meta.env.VITE_REPOSITORY}/issues`
       console.log(issueURL)
        const response = await api.get(`${issueURL}/${issueNumber}`)
        const data = await response.data
        console.log(data)
        const daysDifference = formatDistanceToNow(data.created_at) 
        const content = {
            title: data.title,
            comments: data.comments,
            createdAt: daysDifference,
            body: data.body,
            login: data.user.login,
            html_url: data.html_url
        }
        setIssue(content)        
    }

    useEffect(() => {
        getIssue()
    },[])
    return(
        <IssuePageContainer>
            <IssueHeader>
                <PageLinks>
                    <NavLink to="/" title="home">
                        <CaretLeft size={16}/>
                        <span>VOLTAR</span>
                    </NavLink>
                    
                    <a href={issue.html_url}>
                        <span>GITHUB</span>
                        <img src={goto} alt="" />
                    </a>
                </PageLinks>

                <h1>{issue.title}</h1>

                <HeaderIcons>
                    <span>
                        <GithubLogo data-invert={true} size={18}  weight="fill" />
                        {issue.login}
                    </span>
                    <span>
                        <CalendarBlank size={18} />
                        {issue.createdAt}
                    </span>
                
                    <span>
                        <ChatCircle size={18}  weight="fill" />
                        {issue.comments}
                    </span>
                </HeaderIcons>
            </IssueHeader>
            <MarkDownContainer>
                <Markdown>{issue.body}</Markdown>
            </MarkDownContainer>
        </IssuePageContainer>
    ) 
}