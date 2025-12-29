import Container from "../../components/common/Container/Container";
import { useParams } from "react-router-dom";

const EditBlog = () => {
    const params = useParams();

    return (
        <Container>
            <div>
                <h1>EditBlog</h1>
                <p>This is the edit blog {params.id} page. Blog posts will be displayed here.</p>
            </div>
        </Container>
    )
}   

export default EditBlog;