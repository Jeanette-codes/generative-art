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
    Switch,
} from '@heroui/react'
import {
    changeIterations,
    toggleIntersectingCircles,
    changeCircleRadius,
    toggleShowConnectingLines,
    toggleShowInitialLines,
} from '../state/slices/canvas'
import { useAppSelector, useAppDispatch } from '../hooks'

export const EditDrawer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const iterations = useAppSelector((state) => state.canvas.iterations)
    const showInitialLines = useAppSelector(
        (state) => state.canvas.showInitialLines
    )
    const showIntersectingCircles = useAppSelector(
        (state) => state.canvas.showIntersectingCircles
    )
    const circleRadius = useAppSelector((state) => state.canvas.circleRadius)
    const showConnectingLines = useAppSelector(
        (state) => state.canvas.showConnectingLines
    )
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
                                    defaultValue={iterations}
                                    label="Iterations"
                                    maxValue={1000}
                                    minValue={0}
                                    step={1}
                                    onChangeEnd={(value) =>
                                        dispatch(changeIterations(value))
                                    }
                                />
                                <Switch
                                    onValueChange={(value) =>
                                        dispatch(toggleShowInitialLines(value))
                                    }
                                    isSelected={showInitialLines}
                                >
                                    Show Initial Lines
                                </Switch>
                                <Switch
                                    onValueChange={(value) =>
                                        dispatch(
                                            toggleIntersectingCircles(value)
                                        )
                                    }
                                    isSelected={showIntersectingCircles}
                                >
                                    Show Intersecting Circles
                                </Switch>
                                <Slider
                                    defaultValue={circleRadius}
                                    label="Circle Radius"
                                    maxValue={50}
                                    minValue={0}
                                    step={1}
                                    onChangeEnd={(value) =>
                                        dispatch(changeCircleRadius(value))
                                    }
                                />
                                <Switch
                                    onValueChange={(value) =>
                                        dispatch(
                                            toggleShowConnectingLines(value)
                                        )
                                    }
                                    isSelected={showConnectingLines}
                                >
                                    Show Connecting Lines
                                </Switch>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}
