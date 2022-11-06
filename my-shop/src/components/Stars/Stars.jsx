import './Stars.css';

export const Stars = (props) => {
    const stars = []
    for (let i = 0; i < props.stars; i++) {
        stars.push('star')
    }
    for (let i = 0; i < (5 - props.stars); i++) {
        stars.push('empty_star')
    }
    return <div className="star_block">
        {
            stars.map((star) => <div className={`${star === 'star' ? 'star_icon' : 'star_empty_icon'}`}
                                     key={star.id}></div>)
        }
    </div>

}