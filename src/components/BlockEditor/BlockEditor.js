// import { useState } from 'react'
import {
	BlockEditorProvider,
	BlockList,
	BlockTools,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor'
import { SlotFillProvider, Popover } from '@wordpress/components'
import { useState } from '@wordpress/element'

const BlockEditor = () => {
  const [blocks, updateBlocks] = useState()
  return (
    <BlockEditorProvider
			value={ blocks }
			// onInput={ ( blocks ) => console.log( blocks ) }
			// onChange={ ( blocks ) => console.log( blocks ) }
		>
			<SlotFillProvider>
				<BlockTools>
					<WritingFlow>
						<ObserveTyping>
							<BlockList />
						</ObserveTyping>
					</WritingFlow>
				</BlockTools>
				<Popover.Slot />
			</SlotFillProvider>
		</BlockEditorProvider>
  )
}

export default BlockEditor