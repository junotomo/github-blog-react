import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios";

interface Post {
    title: string,
    created_at: string,
    body: string,
    number: number
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
        let issues 
        const userRepository = `repo:${import.meta.env.VITE_USERNAME}/${import.meta.env.VITE_REPOSITORY}`
        if(!query){
           
            const response = await api.get('/search/issues',{
                params: {
                    q: userRepository
                }
            })
            issues = await response.data
        } else {
            const response = await api.get('/search/issues',{
                params: {
                    q: `${(query ?? '')} ${userRepository}`
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