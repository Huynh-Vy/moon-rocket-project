import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Category.module.css';

const CategoryPage = () => {
    const router = useRouter();
    const { categoryId } = router.query;
    
    const [ categoryName, setCategoryName ] = useState('');
    const [ games, setGames ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const [ hasMore, setHasMore ] = useState(true);
    
    useEffect(() => {
        if (categoryId) {
            fetchCategoryName();
            fetchGames();
        }
    }, [categoryId, page]);

    const fetchCategoryName = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`);
            setCategoryName(response.data.displayName);
        } catch (err) {
            console.log('Error fetching category name: ', err);
        }
    }

    const fetchGames = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/games`, {
                params: { page, limit: 12 }
            });
            setTimeout(() => {
                setGames(prevGames => [...prevGames, ...response.data.games]);
                setHasMore(response.data.games.length === 12);
                setLoading(false);
            }, 500);
        } catch (err) {
            console.log('Error fetching games: ', err);
            setLoading(false);
        }
    }

    const loadMoreGames = () => {
        setPage(prePage => prePage + 1);
    }

    return (
        <div className={styles.container}>
            <h1>{categoryName}</h1>
            <div className={styles.gameList}>
                {games.map(game => (
                    <div key={game.id} className={styles.gameTitle}>
                        <img src={game.thumbnailUrl} alt={game.displayName}/>
                        <p>{game.displayName}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={loadMoreGames}
                disabled={!hasMore || loading}
                className={styles.loadMoreButton}
            >
                {loading ? 'Loading...' : 'Load More'}
            </button>
        </div>

    )
}

export default CategoryPage;