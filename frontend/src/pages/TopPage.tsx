import { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaTiktok } from 'react-icons/fa6';

const API_URL = 'http://localhost:3000';
// const API_URL = 'http://52.195.176.10:3000';

const MAX_LENGTH = 50;

const TopPage = () => {
    const [question, setQuestion] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = question.trim();
        if (!trimmed) {
            alert('質問内容を入力してください！');
            return;
        }
        if (trimmed.length > MAX_LENGTH) {
            alert(`質問は${MAX_LENGTH}文字以内で入力してください。`);
            return;
        }
        await fetch(`${API_URL}/questions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: trimmed }),
        });
        setQuestion('');
        alert('質問を送信しました！');
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom, #e6f7ff, #ffffff)', minHeight: '100vh' }}>
            <Container className="py-5">
                <Card className="text-center shadow-lg p-4 border-0 rounded-4" style={{ backgroundColor: '#ffffffdd' }}>
                    <Card.Body>
                        <img
                            src="/profile.jpg"
                            alt="プロフィール写真"
                            width={160}
                            height={160}
                            className="rounded-circle shadow mb-3"
                            style={{ objectFit: 'cover', border: '4px solid #00bcd4' }}
                        />

                        <h1 style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                            苗字 名前
                        </h1>

                        <p className="mx-auto" style={{ maxWidth: '500px', fontSize: '1rem', color: '#555' }}>
                            はじめまして！ダンス&グループ ****** の*****です🌟<br />
                            TikTokでは、みんなからの質問に動画で答えたり、日常のちょっとしたことを発信中！<br />
                            気軽にメッセージ送ってください♪
                        </p>

                        <Row className="justify-content-center gap-3 mb-4">
                            <Col xs="auto">
                                <a
                                    href="https://x.com/******"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary"
                                    style={{ fontSize: '2rem', display: 'inline-block' }}
                                >
                                    <FaXTwitter />
                                </a>
                            </Col>
                            <Col xs="auto">
                                <a
                                    href="https://www.instagram.com/*****"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-danger"
                                    style={{ fontSize: '2rem', display: 'inline-block' }}
                                >
                                    <FaInstagram />
                                </a>
                            </Col>
                            <Col xs="auto">
                                <a
                                    href="https://www.tiktok.com/@*****"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark"
                                    style={{ fontSize: '2rem', display: 'inline-block' }}
                                >
                                    <FaTiktok />
                                </a>
                            </Col>
                        </Row>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="何でも質問答えます！！！！"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    className="rounded-3 shadow-sm"
                                    style={{ borderColor: '#00bcd4', fontSize: '1rem', padding: '1rem' }}
                                    maxLength={MAX_LENGTH + 10}
                                />
                                <div
                                    className="text-end"
                                    style={{
                                        fontSize: '0.9rem',
                                        color: question.trim().length > MAX_LENGTH ? 'red' : '#888',
                                    }}
                                >
                                    {question.trim().length} / {MAX_LENGTH}文字
                                </div>
                            </Form.Group>

                            <Button
                                type="submit"
                                className="rounded-pill px-4"
                                style={{ backgroundColor: '#00bcd4', border: 'none' }}
                            >
                                💌 質問を送信
                            </Button>
                        </Form>

                        <div className="mt-4">
                            <Link to="/second" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                                ▶︎ みんなの質問一覧はこちら
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default TopPage;
