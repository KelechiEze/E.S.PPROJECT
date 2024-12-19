import type { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import '../styles/globals.css';

const Home: NextPage = () => {
    // Parent/Guardian Details State
    const [parentName, setParentName] = useState('');
    const [relationship, setRelationship] = useState('');
    const [parentContact, setParentContact] = useState('');
    const [parentAddress, setParentAddress] = useState('');
    const [occupation, setOccupation] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');

    // Child Details State
    const [childName, setChildName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !parentName ||
            !relationship ||
            !parentContact ||
            !parentAddress ||
            !occupation ||
            !annualIncome ||
            !childName ||
            !dob ||
            !gender ||
            !schoolName ||
            !schoolAddress ||
            !grade 
 
        ) {
            alert('Please fill out all fields before submitting the form.');
            return; // Stop form submission
        }
    

        const formData = {
            parentName,
            relationship,
            parentContact,
            parentAddress,
            occupation,
            annualIncome,
            childName,
            dob,
            gender,
            schoolName,
            schoolAddress,
            grade,
        };

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            alert('Form submitted successfully!');

            // Reset form fields
            setParentName('');
            setRelationship('');
            setParentContact('');
            setParentAddress('');
            setOccupation('');
            setAnnualIncome('');
            setChildName('');
            setDob('');
            setGender('');
            setSchoolName('');
            setSchoolAddress('');
            setGrade('');

            console.log('Form submitted:', formData);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    // Animation variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <motion.div
                className="max-w-5xl mx-auto py-16"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/new-logo.png"
                        alt="Logo"
                        className="w-80 h-auto"
                    />
                </div>

                {/* Form */}
                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                    {/* Parent/Guardian Details */}
                    <h2 className="text-xl font-semibold text-center">Parent/Guardian Information</h2>
                    <div style={{justifyItems: 'center'}}>
                        <input
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            type="text"
                            placeholder="Full Name"
                            className="input-field"
                        />
                        <select
                            value={relationship}
                            onChange={(e) => setRelationship(e.target.value)}
                            className="input-field"
                            style={{color: 'grey'}}
                        >
                            <option value="" disabled>
                                Relationship to child
                            </option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Guardian">Guardian</option>
                        </select>
                        <input
                            value={parentContact}
                            onChange={(e) => setParentContact(e.target.value)}
                            type="text"
                            placeholder="Email"
                            className="input-field"
                        />
                        <input
                            value={parentAddress}
                            onChange={(e) => setParentAddress(e.target.value)}
                            type="text"
                            placeholder="Home Address"
                            className="input-field"
                        />
                        <input
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            type="text"
                            placeholder="Occupation"
                            className="input-field"
                        />
                        <input
                            value={annualIncome}
                            onChange={(e) => setAnnualIncome(e.target.value)}
                            type="text"
                            placeholder="Annual Income"
                            className="input-field"
                        />
                    </div>

                    {/* Child Details */}
                    <h2 className="text-xl font-semibold text-left text-center">Child Information</h2>
                    <div style={{justifyItems: 'center'}}>
                        <input
                            value={childName}
                            onChange={(e) => setChildName(e.target.value)}
                            type="text"
                            placeholder="Child Full Name"
                            className="input-field"
                        />
                        <input
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = dob ? 'date' : 'text')}
                            type="text"
                            placeholder="Date of Birth"
                            className="input-field"
                        />
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="input-field"
                            style={{color: 'grey'}}
                        >
                            <option value="" disabled>
                                Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            type="text"
                            placeholder="Current School Name"
                            className="input-field"
                        />
                        <input
                            value={schoolAddress}
                            onChange={(e) => setSchoolAddress(e.target.value)}
                            type="text"
                            placeholder="School Address"
                            className="input-field"
                        />
                        <input
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            type="text"
                            placeholder="Class"
                            className="input-field"
                        />
                    </div>
                
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="flex items-center justify-center text-sm w-80 rounded-md shadow py-3 px-2 text-white bg-indigo-500"
                            style={{ backgroundColor: '#FE7E36' }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>
        </main>
    );
};

export default Home;
