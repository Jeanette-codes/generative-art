import react from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Slider,
} from '@heroui/react'
import { changeIterations } from '../state/slices/canvas'
import { useAppSelector, useAppDispatch } from '../hooks'

export const EditDrawer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const iterations = useAppSelector((state) => state.canvas.iterations)
    const dispatch = useAppDispatch()

    return (
        <>
            <Button onPress={onOpen}>Edit</Button>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                Edit Algorithm
                            </DrawerHeader>
                            <DrawerBody>
                                <Slider
                                    className=""
                                    defaultValue={iterations}
                                    label="Iterations"
                                    maxValue={1000}
                                    showTooltip={true}
                                    minValue={0}
                                    step={1}
                                    onChangeEnd={(value) =>
                                        dispatch(changeIterations(value))
                                    }
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute
                                    tempor cupidatat consequat elit dolor
                                    adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do
                                    dolor eiusmod. Et mollit incididunt nisi
                                    consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt
                                    nostrud ad veniam.
                                </p>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}
