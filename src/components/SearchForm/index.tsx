import * as z from 'zod'
import { SearchFormContainer, SearchFormHeader } from "../../../styles"
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PostContext } from '../../Contexts/PostsContext'

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    
    const { fetchIssues ,posts} = useContext(PostContext)
    
    const {
        register,
        handleSubmit
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })


    async function handleSearch(data: SearchFormInput) {
        await fetchIssues(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
            <SearchFormHeader>
                <span>Publicações</span>
                <span>{posts.length} publicações</span>
            </SearchFormHeader>
            <input
                type="text"
                placeholder="buscar conteúdo"
                {...register('query')}
             />
        </SearchFormContainer>
    )
}