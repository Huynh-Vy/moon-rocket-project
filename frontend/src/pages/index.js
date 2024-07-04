import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async() => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
                setCategories(response.data);
            }
            catch (err) {
                console.log('Error fetching categories: ', err);
            }
        }
        fetchCategories();
    }, [])

    return (
        <div className={styles['categories-container']}>
            <h1 className={styles['categories-title']}>Categories</h1>
            <ul className={styles['categories-list']}>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link href={`/category/${category.id}`}>
                            {category.displayName} ({category.gameCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
