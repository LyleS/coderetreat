package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Tick_EmptyGrid_NoChange(t *testing.T) {
	// Assemble
	in := Grid{{}}
	expected := Grid{{}}

	// Act
	actual := tick(in)

	// Assert
	assert.Equal(t, expected, actual)
}

func Tick_FalseGrid_NoChange(t *testing.T) {
	// Assemble
	in := Grid{{false}, {false}}
	expected := Grid{{false}, {false}}

	// Act
	actual := tick(in)

	// Assert
	assert.Equal(t, expected, actual)
}

func Tick_NoNeighbors_Dies(t *testing.T) {
	// Assemble
	in := Grid{{true}}
	expected := Grid{{false}}

	// Act
	actual := tick(in)

	// Assert
	assert.Equal(t, expected, actual)
}
