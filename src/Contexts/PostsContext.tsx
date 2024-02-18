import axios from "axios"
import { ReactNode, useEffect, useState } from "react"
import { createContext } from "use-context-selector"


interface Post {
    title: string,
    createdDate: string,
    body: string
}

interface PostContextType {
    posts: Post[];
    fetchPosts: (query?: string) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderprops {
    children: ReactNode
}

export const PostProvider= ({ children }: PostProviderprops)=> {

    const [posts, setPosts] = useState<Post[]>([])

    async function fetchPosts(query?:string) {
        const repo = 'junotomo/coffee-delivery-react'

        const response = await axios.get('/search/issues',{
            params: {
                _sort:'createdAt',
                _order: 'desc',
                q: query,
                repo:repo
            }
        })

        const profileData = await response.data
        console.log(profileData)
        setPosts(profileData)
    }

    useEffect(() => {
        fetchPosts()
    },[])

    return (
        <PostContext.Provider
            value={{
                posts,
                fetchPosts
            }}>
            {children}
        </PostContext.Provider>
    )
}