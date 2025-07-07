'use client'

import editLecture from '@/actions/edit-lecture'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Lecture } from '@/generated/prisma'
import { Loader2, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React, { startTransition, useActionState, useState } from 'react'
import RemoveLecture from './RemoveLecture'
import ReactPlayer from 'react-player'

type EditLectureProps = {
  lecture: Lecture
}

const EditLecture: React.FC<EditLectureProps> = ({ lecture }) => {
  const [lectureTitle, setTitle] = useState<string>(lecture.lectureTitle || '')
  const [videoUrl, setVideoUrl] = useState<File | string | null>(lecture.lectureVideoUrl || null)
  const [isFree, setIsFree] = useState<boolean>(lecture.isFree || false)

  const [, formAction, isPending] = useActionState(
    editLecture.bind(null, lecture.id, lecture.courseId),
    { errors: {} }
  )

  const fileSeleceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file?.type.startsWith('video/')) {
      setVideoUrl(file)
    }
  }

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!(videoUrl instanceof File)) return

    const formData = new FormData()
    formData.append('lecturetitle', lectureTitle)
    formData.append('lecturevideo', videoUrl)
    formData.append('lectureisfree', JSON.stringify(isFree))

    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Top Navigation */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <Link href="/admin/course/id/lecture">
          <MoveLeft className="bg-black rounded-full p-3 text-white" size={44} />
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold">Update Your Lecture</h1>
      </div>

      {/* Card Section */}
      <Card className="shadow-lg">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Edit Lecture Details</h2>
          <RemoveLecture lecture={lecture} />
        </CardHeader>

        <CardContent>
          <form onSubmit={formSubmitHandler} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label>Lecture Title</Label>
              <Input
                type="text"
                placeholder="Ex. Set up VS Code"
                value={lectureTitle}
                onChange={(e) => setTitle(e.target.value)}
                className="focus-visible:ring-1 focus-visible:ring-violet-500"
              />
            </div>

            {/* Video Upload */}
            <div className="space-y-2">
              <Label>
                Upload New Video <span className="text-red-500 text-sm">(Max: 5 MB)</span>
              </Label>
              <Input type="file" accept="video/*" onChange={fileSeleceHandler} />
              {lecture.lectureVideoUrl && (
                <div className="aspect-video w-full max-w-md">
                  <ReactPlayer
                    url={lecture.lectureVideoUrl}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              )}
            </div>

            {/* Free Toggle */}
            <div className="flex items-center gap-3">
              <Switch id="video" checked={isFree} onCheckedChange={setIsFree} />
              <Label htmlFor="video">Make Lecture Free</Label>
            </div>

            {/* Submit */}
            <div>
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  'Upload Lecture'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditLecture
