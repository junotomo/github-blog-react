import { CardIcons, ProfileContainer, ProfileDescription, ProfileHeader, TitleCardContainer } from "./styles";
import company from '../../assets/company.svg'
import {Users, GithubLogo} from 'phosphor-react'
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import goto from '../../assets/goto.svg'

interface Profile {
    avatar_url: string,
    html_url: string,
    login: string,
    company: string,
    followers: number,
    bio: string,
    name:string,
}

export function TitleCard() {
    const [profile, setProfile] = useState<Profile>(
        {
            avatar_url: '',
            html_url: '',
            login: '',
            company: '',
            followers: 0,
            bio: '',
            name: ''
        }
    )
    
    async function getProfile() {
        const response = await api.get('/users/junotomo')
        const profileData = await response.data
        setProfile(profileData)        
    }

    useEffect(() => {
        getProfile()
    },[])

    return (
        <TitleCardContainer>
            <img src={profile.avatar_url} alt="" />
            <ProfileContainer>
                <ProfileHeader>
                    <span>{profile.name}</span>
                    <a href={profile.html_url}>
                        <span>GITHUB</span>
                        <img src={goto} alt="" />
                    </a>
                </ProfileHeader>
                
                <ProfileDescription>{profile.bio}</ProfileDescription>
                
                <CardIcons>
                    <span>
                        <GithubLogo size={18}  weight="fill" />
                        {profile.login}
                    </span>

                    <span>
                        <img src={company} alt="" />
                        {profile.company}
                    </span>
                   
                   <span>
                     <Users size={18} />
                     {profile.followers}
                   </span>
                     
                </CardIcons>
            </ProfileContainer>
        </TitleCardContainer>
    )
}