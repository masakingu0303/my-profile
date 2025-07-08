import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3000';
// const API_URL = 'http://52.195.176.10:3000';


interface Question {
    id: number;
    content: string;
    created_at: string;
}

const SecondPage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/questions`)
            .then((res) => {
                setQuestions(res.data);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ background: 'linear-gradient(to bottom, #e6f7ff, #ffffff)', minHeight: '100vh' }}>
            <Container className="py-5">
                <Card className="shadow-lg border-0 rounded-4 p-4" style={{ backgroundColor: '#ffffffdd' }}>
                    <Card.Body>
                        <h3 className="mb-4" style={{ fontFamily: 'Noto Sans JP', color: '#00bcd4' }}>
                            みんなの質問一覧
                        </h3>

                        {loading ? (
                            <div className="text-center">
                                <Spinner animation="border" />
                            </div>
                        ) : (
                            <ListGroup className="text-start">
                                {questions.map((q) => (
                                    <ListGroup.Item
                                        key={q.id}
                                        className="rounded-3 mb-2 shadow-sm"
                                        style={{ backgroundColor: '#f8f9fa', border: 'none', padding: '1rem' }}
                                    >
                                        {q.content}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}

                        <div className="mt-4 text-center">
                            <Link
                                to="/top"
                                style={{ color: '#00bcd4', textDecoration: 'none', fontWeight: 'bold' }}
                            >
                                ⬅ トップページに戻る
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default SecondPage;
