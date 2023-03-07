import React from 'react'

const RevRatCard = () => {
    const closeBtn = document.querySelector(".close");
    const [data, setData] = useState({
        review: "",
        rating: ""
    });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData((prev) => ({ ...prev, [input.name]: input.value }));
    };
    const handleDeleteUser = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/deleteReview";
            const { data: res } = await axios.post(url, data);
            console.log(data);
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    const handleDeleteReview = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/deleteUser";
            const { data: res } = await axios.post(url, data);
            console.log(data);
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    
  return (
    <>
            <div
                // key={user.id} 
                class={styles.main}>
                <div class={styles.colOne}>
                    <div class={styles.username}>
                        {/* {user.username} */}
                        username
                    </div>
                    <div class={styles.delBtn}>
                        <Button color="danger" onClick={handleDeleteUser}>Delete User</Button>
                    </div>
                </div>
                <div class={styles.colTwo}
                //  key={reviewId}
                >
                    <div class={styles.reviewContainer}>
                        <div class={styles.reviewRow}>
                            <div class={styles.reviewColOne}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                        </div>
                            <div class={styles.reviewColTwo}>
                                <Button color="danger" onClick={handleDeleteReview}>Delete</Button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </>
  )
}

export default RevRatCard