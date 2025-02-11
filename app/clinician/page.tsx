"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClinicianDashboard() {
  const [patientData, setPatientData] = useState({
    age: "",
    amh: "",
    fsh: "",
    antralFollicleCount: "",
  })
  const [prediction, setPrediction] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePredict = async () => {
    // Here you would typically send the patient data to your backend
    // and get a prediction. For now, we'll simulate a response.
    setPrediction("Based on the provided data, the patient has a 65% chance of successful IVF treatment.")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Clinician Dashboard</h1>
      <Tabs defaultValue="predictive-model">
        <TabsList className="mb-4">
          <TabsTrigger value="predictive-model">Predictive Model</TabsTrigger>
          <TabsTrigger value="patient-management">Patient Management</TabsTrigger>
          <TabsTrigger value="admin-controls">Admin Controls</TabsTrigger>
        </TabsList>
        <TabsContent value="predictive-model">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Data Input</CardTitle>
                <CardDescription>Enter patient clinical data for IVF success prediction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input name="age" value={patientData.age} onChange={handleInputChange} placeholder="Age" />
                  <Input name="amh" value={patientData.amh} onChange={handleInputChange} placeholder="AMH Level" />
                  <Input name="fsh" value={patientData.fsh} onChange={handleInputChange} placeholder="FSH Level" />
                  <Input
                    name="antralFollicleCount"
                    value={patientData.antralFollicleCount}
                    onChange={handleInputChange}
                    placeholder="Antral Follicle Count"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handlePredict} className="w-full">
                  Predict IVF Success
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prediction Result</CardTitle>
                <CardDescription>AI-generated prediction based on patient data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto p-4 border rounded">
                  {prediction && (
                    <div className="mb-2">
                      <span className="inline-block p-2 rounded bg-gray-100">{prediction}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="patient-management">
          <Card>
            <CardHeader>
              <CardTitle>Patient Data Management</CardTitle>
              <CardDescription>Access and manage patient data</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Patient management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="admin-controls">
          <Card>
            <CardHeader>
              <CardTitle>Admin Controls</CardTitle>
              <CardDescription>Modify knowledge base and adjust model parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Admin control interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

