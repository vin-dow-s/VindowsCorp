import { render, screen, fireEvent } from '@testing-library/react'
import Card from './'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
    test('should render title and image', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Harry Potter"
                    label="Magicien"
                    picture="/myPicture.png"
                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText(/Harry/i)
        expect(cardPicture.src).toBe('http://localhost/myPicture.png')
        expect(cardTitle.textContent).toBe(' Harry Potter ')
    })
    test('Should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Harry Potter"
                    label="Magicien"
                    picture="/myPicture.png"
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText(/Harry/i)
        const parentNode = cardTitle.closest('div')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
    })
})
