export type  UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

type CompanyType = {
    id: number,
    title: string
}

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair=u.hair / power
    return copy

}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}


export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}
export function updateBook (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string, ) {
    return {
        ...u,
        books: u.books.map(i => i === oldBook ? newBook : i)
    }
}
export function removeBook (u: UserWithLaptopType & UserWithBooksType, removeBook: string ) {
    return {
        ...u,
        books: u.books.filter(i => i !== removeBook )
    }
}

export function newWork(u: UserWithLaptopType & WithCompaniesType, addWork: string ) {
return {
    ...u,
    companies: [...u.companies, addWork]
}
}

export function updateCompanyTitle(user:  WithCompaniesType, companyId: number, updateWork: string ) {
return {
    ...user,
    companies: user.companies.map(i => i.id === companyId ? {...i, title: updateWork} : i)
}
}

export function updateCompanyTitle2(companies: {[key: string]:Array<CompanyType>}, userName: string, companyId: number, newTitle: string) {

    let companyCopy = {...companies}
    companyCopy[userName]=companyCopy[userName].map(i=> i.id ===companyId ? {...i, title: newTitle}: i)
return companyCopy
}

