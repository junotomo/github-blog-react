import * as z from 'zod'
import { SearchFormContainer, SearchFormHeader } from "../../../styles"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostContext } from '../../Contexts/PostsContext'

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {
        register,
        handleSubmit
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

    const { fetchPosts } = useContext(PostContext)

    async function handleSearch(data: SearchFormInput) {
        await fetchPosts(data.query)
    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
            <SearchFormHeader>
                <span>Publicações</span>
                <span>6 publicações</span>
            </SearchFormHeader>
            <input
                type="text"
                
                placeholder="buscar conteúdo"
                {...register('query')}
             />
        </SearchFormContainer>
    )
}