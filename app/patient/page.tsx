"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PatientPortal() {
  const [chatMessages, setChatMessages] = useState<Array<{ role: string; content: string }>>([])
  const [inputMessage, setInputMessage] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [manualInput, setManualInput] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return

    const newMessage = { role: "user", content: inputMessage }
    setChatMessages([...chatMessages, newMessage])
    setInputMessage("")

    // Here you would typically send the message to your backend LLM
    // and get a response. For now, we'll simulate a response.
    setTimeout(() => {
      const botResponse = { role: "bot", content: "This is a simulated response from the IVF counseling bot." }
      setChatMessages((prevMessages) => [...prevMessages, botResponse])
    }, 1000)
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      // Here you would typically send the file to your backend for processing
      // and get an explanation. For now, we'll simulate a response.
      setTimeout(() => {
        const botResponse = {
          role: "bot",
          content: `Analysis of ${file.name}: This is a simulated explanation of the uploaded medical report.`,
        }
        setChatMessages((prevMessages) => [...prevMessages, botResponse])
      }, 1000)
    }
  }

  const handleManualSubmit = () => {
    if (manualInput.trim() === "") return

    // Here you would typically send the manual input to your backend for processing
    // and get an explanation. For now, we'll simulate a response.
    setTimeout(() => {
      const botResponse = {
        role: "bot",
        content: "Analysis of manual input: This is a simulated explanation based on your provided medical history.",
      }
      setChatMessages((prevMessages) => [...prevMessages, botResponse])
    }, 1000)

    setManualInput("")
  }

  return (
    <div className={`max-w-6xl mx-auto ${darkMode ? "dark" : ""}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patient Portal</h1>
        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>IVF Counseling Bot</CardTitle>
            <CardDescription>Chat with our AI-powered IVF counseling bot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto mb-4 p-4 border rounded dark:border-gray-700">
              {chatMessages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded ${message.role === "user" ? "bg-blue-100 dark:bg-blue-900" : "bg-gray-100 dark:bg-gray-700"}`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message here..."
              className="mb-2 dark:bg-gray-700 dark:text-white"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleSendMessage} className="w-full">
              Send Message
            </Button>
          </CardFooter>
        </Card>
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Report Analysis</CardTitle>
            <CardDescription>Upload your medical reports or input your medical history</CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="file" onChange={handleFileUpload} className="mb-4 dark:bg-gray-700 dark:text-white" />
            {uploadedFile && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Uploaded: {uploadedFile.name}</p>
            )}
            <Textarea
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder="Or type your medical history here (up to 1000 words)..."
              className="mb-4 dark:bg-gray-700 dark:text-white"
              maxLength={1000}
            />
            <Button onClick={handleManualSubmit} className="w-full mb-4">
              Submit Manual Input
            </Button>
            <div className="h-64 overflow-y-auto p-4 border rounded dark:border-gray-700">
              {chatMessages
                .filter((message) => message.role === "bot" && message.content.startsWith("Analysis"))
                .map((message, index) => (
                  <div key={index} className="mb-2">
                    <span className="inline-block p-2 rounded bg-gray-100 dark:bg-gray-700">{message.content}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

