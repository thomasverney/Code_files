{
    people(limit: 6000) {
        profile {
            languages {
                name
            }
        }
    }
}


data.people.filter(p => p.profile).filter(p => p.profile.languages).filter(p => p.profile.languages.map(l => l.name).includes("German"))