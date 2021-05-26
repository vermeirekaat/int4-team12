# Interactive Maze 

Een interactief doolhof (= filter bubble) met doel om uit de filter bubble te geraken. Doodlopende eindes zijn deuren naar de echo chamber. Wanneer de gebruiker op een kruispunt terecht komt, beantwoordt de gebruiker een vraag met links of rechts. Het doolhof is eindeloos, de bedoeling is dat de gebruiker de 'hints' op de muren leest om te weten hoe die uit het doolhof kan geraken. 
De gebruiker moet fysiek een ballon kapot prikken (pop the filter bubble) om uit het doolhof te ontsnappen.

## Technical Stack 
De bedoeling is om het doolhof in een 3D omgeving te simuleren, dit kan a.d.h.v. Three.js. 
De gebruiker kan navigeren doorheen het doolhof door verschillende vragen te beantwoorden, dit zijn telkens dilemma's. Het antwoord is de optie waar de gebruiker het dichts bij staat (links of rechts). Dit kunnen we meten door gebruik te maken van proximity-sensoren uit een Arduino-pakket. 
Het spel is gedaan wanneer de gebruiker een fysieke ballon doorprikt. Om te zien of deze actie is voltooid, gebruiken we ook een toggle uit een Arduino-pakket waarmee we een signaal terug kunnen sturen naar de computer indien dit wel/ niet gelukt is. 

- Three.js
- Proximity-sensoren van Arduino 
- Toggle van Arduino 