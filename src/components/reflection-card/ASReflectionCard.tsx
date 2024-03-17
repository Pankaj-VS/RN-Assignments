import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './asReflectionCard-styles';

interface Question {
    question: string;
}

interface ASReflectionCardProps {
    question: Question[];
}

const ASReflectionCard: React.FC<ASReflectionCardProps> = ({ question }) => {
    const [userInput, setUserInput] = useState<string[]>(Array(question.length).fill(''));
    const [idx, setIdx] = useState(0);
    const currentQuestion = question[idx] ? question[idx].question : '';
    const previousQuestion = question[idx - 1] ? question[idx - 1].question : '';
    const nextQuestion = question[idx + 1] ? question[idx + 1].question : '';

    const handlePrevious = () => {
        if (idx > 0) {
            setIdx(idx - 1);
        }
    };

    const handleNext = () => {
        if (idx < question.length - 1) {
            setIdx(idx + 1);
        }
    };

    const handleSubmit = () => {
        console.log('User inputs:');
        question.forEach((q, i) => {
            console.log(`Question ${i + 1}: ${q.question}`);
            console.log(`Answer: ${userInput[i]}`);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer1}>
                <Text>{currentQuestion}</Text>
                <TextInput
                    onChangeText={(text) => {
                        const updatedInputs = [...userInput];
                        updatedInputs[idx] = text;
                        setUserInput(updatedInputs);
                    }}
                    value={userInput[idx]}
                    placeholder="Type your response here..."
                    multiline={true}
                    numberOfLines={9}
                />
            </View>
            <View style={styles.buttonContainer}>
                {previousQuestion ? (
                    <Pressable onPress={handlePrevious} style={styles.button}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </Pressable>
                ) : <Pressable onPress={handlePrevious} style={styles.button}>
                    <Text style={styles.buttonText2}>Previous</Text>
                </Pressable>}
                {nextQuestion ? (
                    <Pressable onPress={handleNext} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>
                ) : <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>}
            </View>
        </View>
    );
};

export default ASReflectionCard;
