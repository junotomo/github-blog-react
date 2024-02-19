import { ReactNode, createContext, useEffect, useState } from "react"

import { api } from "../lib/axios";


interface Post {
    title: string,
    created_at: string,
    body: string,
    id: number
}

interface PostContextType {
    posts: Post[],
    fetchIssues: (query?: string) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderprops {
    children: ReactNode
}

export function PostProvider({ children }: PostProviderprops){

    const [posts, setPosts] = useState<Post[]>([])

    async function fetchIssues(query?: string) {
        //dotenv.config(); 
        //const repo = process.env.USERNAME + '/' + process.env.REPOSITORY
        let issues 

        if(!query){
            const queryParam = 'repo=rocketseat-education/reactjs-github-blog-challenge'
            const response = await api.get('/search/issues',{
                params: {
                    q: queryParam
                }
            })
            issues = await response.data
        } else {
            const response = await api.get('/search/issues',{
                params: {
                    q: query,
                    repo:'rocketseat-education/reactjs-github-blog-challenge'
                }
            })
            issues = await response.data
        }
        setPosts(issues.items)
    }

    useEffect(() => {
        fetchIssues()
    },[])

    return (
        <PostContext.Provider
            value={{
                posts,
                fetchIssues
            }}
        >
            {children}
        </PostContext.Provider>
    )
}