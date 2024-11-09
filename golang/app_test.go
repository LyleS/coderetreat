package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestTickEmptyGridIsEmpty(t *testing.T) {
	// Assemble
	in := Grid{{}}
	expected := Grid{{}}
	
	// Act
	actual := tick(in)

	// Assert 
	assert.Equal(t, expected, actual)
}
