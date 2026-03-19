import'./Nav-link.css'

export default function NavLink ({title, href}) {
    return (
        <a href={href} className='nav-link'>{title}</a>
    )
}